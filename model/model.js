//--database
const database = require("../config/config");
// bcrypt & token
let { hash, compare, hashSync } = require("bcrypt");
let { createToken, createTokenAdmin } = require("../middleware/Authenticated");

//--CLASSES
//USER CLASS
class User {
  login(req, res) {
    const { emailAddress, userPassword } = req.body;
    const stryQry = `
        SELECT userID, firstName, lastName, emailAddress, userPassword, relationship, childFirstName,childLastName, childAge, enrollment
        FROM Users
        WHERE emailAddress = '${emailAddress}';
        `;
    database.query(stryQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "Incorrect Email Address. Try Again" });
      } else {
        await compare(userPassword, data[0]?.userPassword, (cErr, cResult) => {
          if (cErr) throw cErr;
          const jwToken = createToken({
            emailAddress,
            userPassword,
          });
          res.cookie("green_light", jwToken, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.status(200).json({
              msg: "Logged In",
              jwToken,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "You entered an incorect password or not registered. Try Again",
            });
          }
        });
        // console.log(data[0].userPassword);
      }
    });
  }
  fetchUsers(req, res) {
    const strQry = `
                SELECT userID, firstName, lastName, emailAddress, userRole, relationship, childFirstName,childLastName, childAge, enrollment
                FROM Users;
                `;

    database.query(strQry, (err, data) => {
      if (err) throw err;
      else res.status(200).json({ results: data });
    });
  }
  fetchUser(req, res) {
    const stryQry = `
        SELECT userID, firstName, lastName, emailAddress, userRole, relationship, childFirstName, childLastName, childAge, enrollment
        FROM Users
        WHERE userID = ?;
        `;
    database.query(stryQry, [req.params.id], (err, data) => {
      if (err) throw err;
      else res.status(200).json({ result: data });
    });
  }
  async createUser(req, res) {
    let detail = req.body;
    detail.userPassword = await hash(detail.userPassword, 20);
    let user = {
      emailAddress: detail.emailAddress,
      userPassword: detail.userPassword,
    };
    const stryQry = `
        INSERT INTO Users
        SET ?;
        `;
    database.query(stryQry, [detail], (err) => {
      if (err) {
        res.status(401).json({ err });
      } else {
        const jwToken = createToken(user);
        res.cookie("legitUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "New record is saved!" });
      }
    });
  }
  updateUser(req, res) {
    let data = req.body;
    if (data.userPassword != null || data.userPassword != undefined)
      data.userPassword = hashSync(data.userPassword, 20);
    const stryQry = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
    database.query(stryQry, [data, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Update Successfully" });
    });
  }
  forgotPass(req, res) {
    let data = req.body;
    if (data.userPassword != null || data.userPassword != undefined)
      data.userPassword = hashSync(data.userPassword, 20);
    const stryQry = `
        UPDATE Users
        SET emailAddress
        WHERE userID = ?;
        `;
    database.query(stryQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Password Set" });
    });
  }
  deleteUser(req, res) {
    const stryQry = `
        DELETE FROM Users
        WHERE userID = ?;
        `;
    database.query(stryQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "User Deleted" });
    });
  }
}
//ADMIN CLASS
class Admin {
  loginAdmin(req, res) {
    const { emailAddress, adminPassword } = req.body;
    const stryQry = `
        SELECT adminID, firstName, lastName, emailAddress, adminPassword, adminProfile
        FROM Admins
        WHERE emailAddress = '${emailAddress}';
        `;
    database.query(stryQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "Incorrect Email Address. Try Again" });
      } else {
        await compare(
          adminPassword,
          data[0].adminPassword,
          (cErro, cResult) => {
            if (cErro) throw cErro;
            const jwToken = createTokenAdmin({
              emailAddress,
              adminPassword,
            });
            res.cookie("green_light", jwToken, {
              maxAge: 3600000,
              httpOnly: true,
            });
            if (cResult) {
              res.status(200).json({
                msg: "Logged In",
                jwToken,
                result: data[0],
              });
            } else {
              res.status(401).json({
                err: "You entered an incorect password or not registered. Try Again",
              });
            }
          }
        );
      }
    });
  }
  fetchAdmins(req, res) {
    const strQry = `
                SELECT adminID, firstName, lastName, emailAddress, adminProfile 
                FROM Admins;
                `;

    database.query(strQry, (err, data) => {
      if (err) throw err;
      else res.status(200).json({ results: data });
    });
  }
  fetchAdmin(req, res) {
    const stryQry = `
        SELECT adminID, firstName, lastName, emailAddress, adminProfile
        FROM Admins
        WHERE adminID = ?;
        `;
    database.query(stryQry, [req.params.id], (err, data) => {
      if (err) throw err;
      else req.status(200).json({ result: data });
    });
  }
  async createAdmin(req, res) {
    let details = req.body;
    details.adminPassword = await hash(details.adminPassword, 20);
    let admin = {
      emailAddress: details.emailAddress,
      adminPassword: details.adminPassword,
    };
    const stryQry = `
        INSERT INTO Admins
        SET ?;
        `;
    database.query(stryQry, [details], (err) => {
      if (err) {
        res.status(401).json({ err }), console.log(err);
      } else {
        const jwToken = createTokenAdmin(admin);
        res.cookie("legitAdmin", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "New Admin added" });
      }
    });
  }
  updateAdmin(req, res) {
    let data = req.body;
    if (data.adminPassword != null || data.adminPassword != undefined)
      data.adminPassword = hashSync(data.adminPassword, 20);
    const stryQry = `
        UPDATE Admins
        SET ?
        WHERE adminID = ?;
        `;
    database.query(stryQry, [data, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Update Successfully" });
    });
  }
  forgotPass(req, res) {
    let data = req.body;
    if (data.adminPassword != null || data.adminPassword != undefined)
      data.adminPassword = hashSync(data.adminPassword, 20);
    const stryQry = `
        UPDATE Admins
        SET emailAddress
        WHERE adminID = ?;
        `;
    database.query(stryQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Password Set" });
    });
  }
  deleteAdmin(req, res) {
    const stryQry = `
        DELETE FROM Admins
        WHERE adminID = ?;
        `;
    database.query(stryQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Admin Deleted" });
    });
  }
}
//PRODUCTS CLASS
class Product {
  fetchProducts(req, res) {
    const strQry = `SELECT ID, prodName, prodDescription, category, price, prodQuantity, imgURL
                  FROM Products`;
    database.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
  fetchProduct(req, res) {
    const strQry = `SELECT ID, prodName, prodDescription, category, price, prodQuantity, imgURL
                  FROM Products
                  WHERE ID = ?;`;
    database.query(strQry, [req.params.id], (err, results) => {
      if (err) throw err;
      res.status(200).json({ result: results });
    });
  }
  addProduct(req, res) {
    const strQry = `
                  INSERT INTO Products
                  SET ?;
                  `;
    database.query(strQry, [req.body], (err) => {
      if (err) {
        res
          .status(400)
          .json({ err: "inserting a new record was unsuccessful" });
      } else {
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  updateProduct(req, res) {
    const strQry = `
                  UPDATE Products
                  SET ?
                  WHERE ID = ?
                  `;
    database.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res
          .status(400)
          .json({ err: "inserting a new record was unsuccessful" });
      } else {
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
  deleteProduct(req, res) {
    const strQry = `
                  DELETE FROM Products
                  WHERE ID = ?;
                  `;
    database.query(strQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

class Cart {
  fetchCart(req, res) {
    const strQry = `
        SELECT ID, prodName, category, price, quantity, prodDescription, imgURL
        FROM Cart;
        `;
    database.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ results: data });
    });
  }
  fetchCartItem(req, res) {
    const strQry = `
        SELECT ID, prodName, category, price, prodDescription, quantity imgURL
        FROM Cart;
        `;
    database.query(strQry, (err, data) => {
      if (err) throw err;
      res.status(200).json({ result: data });
    });
  }
  addCart(req, res) {
    const strQry = `
        INSERT INTO Cart
        SET ?;
        `;
    database.query(strQry, [req.body], (err) => {
      if (err) {
        res
          .status(400)
          .json({ err: "inserting a new record was unsuccessful" });
      } else {
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  updateCart(req, res) {
    const strQry = `
    UPDATE Cart
    SET ?
    WHERE ID = ?
    `;
    database.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res
          .status(400)
          .json({ err: "inserting a new record was unsuccessful" });
      } else {
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
  deleteCart(req, res) {
    const strQry = `
    DELETE FROM Cart
    WHERE ID = ?;
    `;
    database.query(strQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

module.exports = { User, Product, Admin, Cart };
