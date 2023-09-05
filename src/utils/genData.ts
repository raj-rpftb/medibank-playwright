import { faker } from '@faker-js/faker';

class genData {

  genUserData() {
    return {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: "Panchkuian Road, Connaught Place",
      state: "Delhi",
      city: "Delhi",
      zipCode: "110001",
      phoneNumber: "01123364261",
      password: "12345678",
      day: "29",
      month: "February",
      year: "1992"
    };
  }


}

export default genData;
