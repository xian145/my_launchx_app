const MissionCommander = require('./../app/missionCommander'); //la clase que se quiere probar

describe("Unit test for Mission Commander Class", () => {
    test('1. Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa");
        expect(myMissionCommander.name).toBe("Woopa");
    });
})
//se a verificado que pase y que falle la prueba