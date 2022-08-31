import {Questionnaire} from "../models/questionnaire.interface";
import {Person} from "../models/person.interface";
import {Questions} from "../models/questions.interface";
import {PriceRange} from "../enums/price-range.enum";

export function initData(){
  return [<Questionnaire>{
    person: <Person>{
      name: "Jan",
      lastname: "Kowalski",
      pesel: "91111112345",
      mobile: "665-454-333",
      address: "ul. Długa",
      city: "Gdańsk",
      zipCode: "80-800"
    },
    questions: <Questions>{
      lastConsumptionDate: new Date(),
      howOftenPerWeek: 2,
      satisfied: true,
      priceRange: PriceRange.ACCEPTABLE,
      toChange: "Pikantniejszy smak"
    }
  }]
}
