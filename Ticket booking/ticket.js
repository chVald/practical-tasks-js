class CinemaBooking {
    constructor(totalSeats) {
        this.seats = new Map();
        for (let i = 1; i <= totalSeats; i++) {
            this.seats.set(i, null);
        }
    }

    bookTicket(seat, name) {
        if (!this.seats.has(seat)) {
            throw new Error("Місця не існує.");
        }
        if (this.seats.get(seat)) {
            throw new Error("Місце вже заброньоване.");
        }
        this.seats.set(seat, { name, paid: false });
        console.log(`Місце ${seat} заброньоване для ${name}.`);

        this.payForTicket(seat);
    }

    payForTicket(seat) {
        if (!this.seats.has(seat)) {
            throw new Error("Місця не існує.");
        }
        const booking = this.seats.get(seat);
        if (!booking) {
            throw new Error("Місце не заброньоване.");
        }
        booking.paid = true;
        console.log(`Квиток на місце ${seat} оплачено.`);
    }

    getAvailableSeats() {
        return [...this.seats.entries()]
            .filter(([_, booking]) => booking === null)
            .map(([seat]) => seat);
    }

    printAvailableSeats() {
        console.log("Вільні місця:", this.getAvailableSeats());
    }
}

const cinema = new CinemaBooking(10);
cinema.bookTicket(4, "Іван");
cinema.printAvailableSeats();