//--database
const database = require('../config');
// bcrypt & token
let {hash, compare, hashSync} = require('bcrypt');
let {createToken} = require('../middleware/Authenticated');

            //--CLASSES
//USER CLASS
class User {
    login(req, res) {
        const {emailAddress, userPassword} = req.body;
        const stryQry = 
        `
        SELECT userID, firstName, lastName, emailAddress, userPassword, userProfile, childName,childLastName, childAge, enrollment
        FROM Users
        WHERE emailAddress = '${emailAddress}';
        `;
        database.query(stryQry, async (err, data) => {
            if(err) throw err;
            if(!data || data == null) {
                res.status(401).json({err: "Incorrect Email Address. Try Again"});
            }else {
                await compare(userPassword, data[0].userPassword, (cErro, cResult) => {
                    if(cErro) throw cErro;
                    const jwToken = createToken({
                        emailAddress, userPassword
                    });
                    res.cookie("green_light", jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    });
                    if(cResult) {
                        res.status(200).json({
                            msg: "Logged In",
                            jwToken,
                            result: data[0]
                        });
                    }else{
                        res.status(401).json({
                            err: "You entered an incorect password or not registered. Try Again"
                        });
                    }
                });
            }
        });
    }
    fetchUser(req, res){
        const stryQry =
        `
        SELECT userID, firstName, lastName, emailAddress, userRole, userProfile, childName,childLastName, childAge, enrollment
        FROM Users
        WHERE userID = ?;
        `;
    database.query(stryQry, [req.params.id], (err, data) => {
        if (err) throw err;
        else req.status(200).json({result: data});
    });
    }
    async createUser(req, res){
        let detail = req.body;
        detail.userPassword = await hash(detail.userPassword, 20);
        let user = {
            emailAddress: detail.emailAddress,
            userPassword: detail.userPassword
        };
        const stryQry = 
        `
        INSERT INTO Users
        SET ?;
        `;
    database.query(stryQry, [detail], (err) => {
        if(err){
            res.status(401).json({err});
        }else{
            const jwToken = createToken(user);
            res.cookie("legitUser", jwToken, {
                maxAge:3600000,
                httpOnly: true,
            });
            res.status(200).json({msg: "New record is saved!"});
        }
    });
    }
    updateUser(req, res){
        let data = req.body;
        if(data.userPassword != null || data.userPassword != undefined)
        data.userPassword = hashSync(data.userPassword, 20);
        const stryQry = 
        `
        UPDATE Users
        `
    }
}
