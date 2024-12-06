const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
    it(`case red green`, () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });
    it(`case red orange`, () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
    it(`case red undefined`, () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
});
