import { render } from "@testing-library/react";
import { BodyComponent } from "../Body";

//Mocking fetch function.Fetch returns a fetch by default always so we need to mock this and return a promise too

global.fetch()=jest.fn(()=>{
    //Fetch function resolves with a json by default in real life 
// fetch returns a promise which inturn returns a json which returns a promise resolved with data 
    return Promise.resolve({
     json : ()=>{
     return Promise.resolve(data);
    }
    })

    })



//Wont work cuz in Body componenet we have fetch() API , so I have to mock this fetch function
it("render the body componenet that has Restaurant cards with search button", () => {
  render(<BodyComponent></BodyComponent>);
});
