export default function() {

    this.setDefault({


    });

    this.transition(
        this.fromRoute(function() {
            return true;
        }),
        this.toRoute(function() {
            return true;
        }),

        this.use("fade")

    );

}