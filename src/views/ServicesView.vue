<template>
    <div class="b">

        <div class="serv">
            <h1 style="color: black;">Services</h1>
            <h2>Nursery and Creche</h2>

            <br>
            <h4 class="top">The crèche consists of Nursery 1, Nursery 2, Puppies, Swallows and Bees.</h4>
            <br>
            <div class="nursery">
                <div class="info">
                    <p>We can take babies from 1 month old. Children are placed in the various groups according to age and
                        development and will move up to a different group once they have reached the appropriate age or
                        development
                        stage. Ages given in our breakdown of the classes are merely a guideline, as it changes depending on
                        need.

                        The emphasis in the crèche falls on care, physical and social development with the academic program
                        starting
                        from Nursery 1 for complete cognitive development.

                        Our aim is to ensure that all our children are happy and are receiving individual attention
                        according to
                        their needs. Some children develop faster than others. We try and meet all needs.
                    </p>
                </div>

                <img src="https://i.postimg.cc/4NSJbnrg/infant2.jpg" alt="">
                <br>
            </div>

            <h2>Pre-Primary with Grade R</h2>

            <div class="pre">
                <img src="https://i.postimg.cc/J7k1RRg7/toddlers2.jpg" alt="" srcset="">
                <div class="det">
                    <br>
                    <p>We have a fully independent pre-primary school and the children follow a daily class program and a 4
                        term
                        school calendar. The children wear a school uniform during term to facilitate outdoor play and
                        LifeSkills
                        activities.</p>
                    <br>
                    <h4>The pre-primary classes consist of:</h4>
                    <br>
                    <p>
                        - Gr 00 (for the 4 year olds): Seals, Dolphins
                        - Gr 0 (for the 5 year olds turning 5 between July and December)
                        - Gr R(2)(for the 5 year olds turning 5 between January and June and for 6 year olds.)
                        - Gr R(1)(for 6 year olds)
                        The children are placed in groups according to age.

                        We follow a structured education program, which is stimulating and creative at the same time.

                        The Gr R CAPS curriculum is prescribed by the National Education Department. This curriculum is
                        followed
                        in
                        our Gr R(1) and Gr R(2) and Gr 0 classes. We have scaled this down for our Gr 00 classes, so that
                        they
                        can
                        get a head start with their academic development.

                        Reports are issued four times a year for all classes. A baseline assessment is also done in Gr R in
                        January
                        to help assess their school readiness.
                    </p>
                </div>

            </div>
            <br>
            <h2> Aftercare & Holiday Care</h2>

            <div class="aftercare">
                <br>
                <div class="after">

                    <div class="data">
                        <h4> Aftercare</h4>
                        <br>
                        <p> Primary School children attend our aftercare in the afternoons and during the school holidays.
                            We
                            offer
                            transport to and from Milnerton Primary School, Seamount Primary School, Woodbridge Primary
                            School
                            and
                            Tygerhof
                            Primary School. The Holy Cross Convent, Brooklyn children also attend our aftercare and holiday
                            care
                            programmes.

                            The aftercare teachers do supervised homework with the children and if they do not have
                            homework,
                            they
                            are
                            given
                            supplementary work to do. They can relax and are supervised outdoors (weather permitting) once
                            their
                            homework is
                            complete.
                            They also have cooked meals and snacks.</p>
                    </div>
                    <img src="https://i.postimg.cc/MZ0tgFwP/aftercare.jpg" alt="" srcset="">
                </div>
                <br>

                <div class="care">
                    <img src="https://i.postimg.cc/QM0KpcZq/holidaycare.jpg" alt="" srcset="">
                    <div class="dat">
                        <h4>Holiday Care</h4>
                        <p>A holiday program is offered during the holidays for our regular aftercare children and also for
                            casuals.
                            Any
                            primary school children from Gr R can attend. Aftercare children don’t pay extra to attend
                            during
                            the
                            holidays. There is a daily fee payable by all other casual attendees.</p>
                        <br>
                        <h4>Casual Care</h4>
                        <p>All children from 1 month to Gr R can attend on a casual basis. This is especially beneficial for
                            families
                            who are on holiday from abroad or nationally or who are here for work purposes and who wish for
                            their
                            children to be taken care of during this time.
                            Any parent wishing to make use of this service can enquire for full details.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.b {
    height: 80rem;
}

.nursery,
.aftercare,
.pre {
    color: black;
}

.nursery,
.pre,
.after,
.care {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1rem;
}

.nursery img {
    width: 13rem;
    height: 12rem;
}

.top{
    margin-bottom: .7rem;
}

.after img {
    width: 15em;
    height: 10rem;
    margin-top: 2rem;
}

.after {
    margin-right: 5rem;
}

.care img {
    width: 20rem;
    height: 10rem;
    margin-top: 3rem;
}

.pre img {
    width: 15rem;
    height: 12rem;
}

h2 {
    color: #CE3375;
    margin-bottom: 2rem;

}

h4 {
    color: black;
    margin-top: 1rem;
    font-size: 1.2rem;
}

.serv {
    transform: translateY(1%);
    margin-left: auto;
    margin-right: auto;
}

.info,
.det,
.data,

.dat {
    width: 30rem;
}

.det,
.dat {
    margin-right: 5rem;
}

.pre h4 {
    margin-top: -1rem;
}

@media (width < 576px) {
    .nursery,
.pre,
.after,
.care {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
.nursery img {
    width: 10rem;
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
}
.after img {
    width: 10em;
    height: 7rem;
    margin-left: auto;
    margin-right: auto;
}
.care img {
    width: 10rem;
    height: 5rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
}
.pre img {
    width: 10rem;
    height: 7rem;
    margin-left: auto;
    margin-right: auto;
}
.info,
.det,
data,
.dat {
    width: 15rem;
    margin-left: auto;
    margin-right: auto;
}

.serv{
    margin-left: auto;
    margin-right: auto;
}
h2{
    font-size: 1rem;
}
h4{
    font-size: 1rem;
}

p{
    font-size: .9rem;
}
.top{
    margin-left: 0rem;
    margin-top: -2rem;
}
}
</style>