class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.rooms = {
            single: this.capacity * 0.5,
            double: this.capacity * 0.3,
            maisonette: this.capacity * 0.2,
        };
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135,
        };
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25,
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.rooms[roomType] > 0) {
            const client = {
                bookingNumber: this.currentBookingNumber++,
                clientName,
                roomType,
                nights,
            };
            this.rooms[roomType] -= 1;
            this.bookings.push(client);
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${client.bookingNumber}.`;
        }
        return `No ${roomType} rooms available! ${Object.keys(this.rooms)
            .filter(x => x !== roomType)
            .map(x => `Available ${x} rooms: ${this.rooms[x]}.`).join(' ')}`;
    }

    roomService(currentBookingNumber, serviceType) {
        const client = this.bookings.find(x => x.bookingNumber === currentBookingNumber);
        if (!client) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (Object.keys(this.servicesPricing).includes(serviceType)) {
            client.services ? client.services.push(serviceType) : client.services = [ serviceType ];
            return `Mr./Mrs. ${client.clientName}, Your order for ${serviceType} service has been successful.`;
        }

        return `We do not offer ${serviceType} service.`;
    }

    checkOut(currentBookingNumber) {
        const client = this.bookings.find(x => x.bookingNumber === currentBookingNumber);
        if (client) {
            const totalMoney = this.roomsPricing[client.roomType] * client.nights;
            this.rooms[client.roomType] += 1;
            if (client.services) {
                let totalServiceMoney = 0;
                client.services.forEach(x => totalServiceMoney += this.servicesPricing[x]);

                return `We hope you enjoyed your time here, Mr./Mrs. ${client.clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
            }
            return `We hope you enjoyed your time here, Mr./Mrs. ${client.clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }
        return `The booking ${currentBookingNumber} is invalid.`;
    }

    report() {
        const output = `${this.name.toUpperCase()} DATABASE:
--------------------
`;
        if (this.bookings.length === 0) {
            return output + 'There are currently no bookings.';
        }

        return output + this.bookings.map(client => Object.entries(client).map(x => Array.isArray(x[1]) ? `${x[0]}: ${x[1].join(', ')}` : `${x[0]} - ${x[1]}`).join('\n')).join('\n----------\n');
    }
}


// 87 / 100 Judge !!!

const hotel = new Hotel('HotUni', 10);

// console.log(hotel.rentARoom('Peter', 'single', 4));
// console.log(hotel.rentARoom('Robert', 'double', 4));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));
// console.log(hotel.rooms); 

// const hotel = new Hotel('HotUni', 10);

// hotel.rentARoom('Peter', 'single', 4);
// hotel.rentARoom('Robert', 'double', 4);
// hotel.rentARoom('Geroge', 'maisonette', 6);

// console.log(hotel.roomService(3, 'housekeeping'));
// console.log(hotel.roomService(3, 'drink'));
// console.log(hotel.roomService(2, 'room'));
// console.log(hotel.bookings); 


hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');
// console.log(hotel.checkOut(3));
console.log(hotel.report());

