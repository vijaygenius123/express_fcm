const {expect} = require('chai')
const  app = require('../src/app')

describe("App", function (){

    it("Should run the server", function async(){
        expect(app.port).to.equal(8000)
    })


})
