const fs = require("fs");
const width = 2048;
const height = 2048;
const dir = __dirname;
const description = "This NFT is based on greatest friendly idea which connect people all over the world!";
const baseImageUri = "https://duckycollect/nft";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
    {
        value: "animal",
        from: 1,
        to: 10,
    },{
        value: "colored",
        from: 11,
        to: 20,
    },{
        value: "zombie",
        from: 21,
        to: editionSize,
},
];

const races = {
    animal: {
        name: "Animal",
        layers: [
            {
            name: "Background",
            elements: [{
                id: 0,
                name: "Palm",
                path: `${dir}/background/Palm.png`,
                weight: 100 //40%
              },{
                id: 1,
                name: "BoatBack",
                path: `${dir}/background/BoatBack.png`,
                weight: 60 //25%
              },{
                id: 2,
                name: "Graffity",
                path: `${dir}/background/Graffity.png`,
                weight: 35 //20%
              },{
                id: 3,
                name: "Bus",
                path: `${dir}/background/Bus.png`,
                weight: 15 //10%
              },{
                id: 4,
                name: "SNY",
                path: `${dir}/background/SNY.png`,
                weight: 5 //5%
              }],
            position: {x: 0, y: 0},
            size: { width: width, height: height },
            },
            {
                name: "Surf",
                elements: [{
                    id: 0,
                    name: "Shadow",
                    path: `${dir}/surf/Shadow.png`,
                    weight: 90
                  },{
                    id: 1,
                    name: "Orange",
                    path: `${dir}/surf/Orange.png`,
                    weight: 85
                  },{
                    id: 2,
                    name: "Pink",
                    path: `${dir}/surf/Pink.png`,
                    weight: 77
                  },{
                    id: 3,
                    name: "Desk",
                    path: `${dir}/surf/Desk.png`,
                    weight: 66
                  },{
                    id: 4,
                    name: "Leaves",
                    path: `${dir}/surf/Leaves.png`,
                    weight: 44
                  },{
                    id: 5,
                    name: "Cow",
                    path: `${dir}/surf/Cow.png`,
                    weight: 22
                  },{
                    id: 6,
                    name: "Flower",
                    path: `${dir}/surf/Flower.png`,
                    weight: 5
                  }],
                position: {x: 0, y: 0},
                size: { width: width, height: height },
            },
        {
            name: "Body",
            elements: [{
                id: 0,
                name: "DuckYellow",
                path: `${dir}/body/DuckYellow.png`,
                weight: 100
            //   },{
            //     id: 1,
            //     name: "Palm",
            //     path: `${dir}/body/Palm.png`,
            //     weight: 30
            //   },{
            //     id: 2,
            //     name: "Graffity",
            //     path: `${dir}/body/Graffity.png`,
            //     weight: 20
            //   },{
            //     id: 3,
            //     name: "Bus",
            //     path: `${dir}/body/Bus.png`,
            //     weight: 10
            //   },{
            //     id: 4,
            //     name: "SNY",
            //     path: `${dir}/body/SNY.png`,
            //     weight: 5
            }],
            position: {x: 0, y: 0},
            size: { width: width, height: height },
        },
        {
          name: "Hat",
            elements: [{
              id: 0,
              name: "Empty",
              path: `${dir}/eye/Empty.png`,
              weight: 80
            },{
              id: 1,
              name: "Hat",
              path: `${dir}/hat/Hat.png`,
              weight: 60
            },{
              id: 2,
              name: "Cap",
              path: `${dir}/hat/Cap.png`,
              weight: 55
            },{
              id: 3,
              name: "Bear",
              path: `${dir}/hat/Bear.png`,
              weight: 50
            },{
              id: 4,
              name: "ArmyHat",
              path: `${dir}/hat/ArmyHat.png`,
              weight: 45
            },{
              id: 5,
              name: "HypeHat",
              path: `${dir}/hat/ArmyHat.png`,
              weight: 40
            },{
              id: 6,
              name: "OldSchoolHat",
              path: `${dir}/hat/OldSchoolHat.png`,
              weight: 35
            },{
              id: 7,
              name: "Bandana",
              path: `${dir}/hat/Bandana.png`,
              weight: 30
            },{
              id: 8,
              name: "Sweetie",
              path: `${dir}/hat/Sweetie.png`,
              weight: 26
            },{
              id: 9,
              name: "Nimb_2",
              path: `${dir}/hat/Nimb_2.png`,
              weight: 20
            },{
              id: 10,
              name: "Nimb_1",
              path: `${dir}/hat/Nimb_1.png`,
              weight: 15
            },{
              id: 11,
              name: "OctoHat",
              path: `${dir}/hat/OctoHat.png`,
              weight: 13
            },{
              id: 12,
              name: "SpaceHat",
              path: `${dir}/hat/SpaceHat.png`,
              weight: 12
            },{
              id: 13,
              name: "Idiot",
              path: `${dir}/hat/Idiot.png`,
              weight: 7
            },{
              id: 14,
              name: "RedGlass",
              path: `${dir}/hat/RedGlass.png`,
              weight: 3
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
        {
            name: "Eye",
              elements: [{
                id: 0,
                name: "Cute",
                path: `${dir}/eye/Cute.png`,
                weight: 90
             },{
                id: 1,
                name: "Wide",
                path: `${dir}/eye/Wide.png`,
                weight: 75
              },{
                id: 2,
                name: "White",
                path: `${dir}/eye/White.png`,
                weight: 70
              },{
                id: 3,
                name: "Lovely",
                path: `${dir}/eye/Lovely.png`,
                weight: 60
              },{
                id: 4,
                name: "Pixel",
                path: `${dir}/eye/Pixel.png`,
                weight: 50
              },{
                id: 5,
                name: "Water",
                path: `${dir}/eye/Water.png`,
                weight: 40
              },{
                id: 6,
                name: "Cool",
                path: `${dir}/eye/Cool.png`,
                weight: 35
              },{
                id: 7,
                name: "Smile",
                path: `${dir}/eye/Smile.png`,
                weight: 20
              },{
                id: 8,
                name: "CuriEye",
                path: `${dir}/eye/CuriEye.png`,
                weight: 19
              },{
                id: 9,
                name: "Make",
                path: `${dir}/eye/Make.png`,
                weight: 15
              },{
                id: 10,
                name: "Empty",
                path: `${dir}/eye/Empty.png`,
                weight: 10
              },{
                id: 11,
                name: "HypeGlass",
                path: `${dir}/eye/HypeGlass.png`,
                weight: 1
              }],
            position: {x: 0, y: 0},
            size: { width: width, height: height },
        },
        {
            name: "Item",
            elements: [{
                id: 0,
                name: "Hawaii",
                path: `${dir}/item/Hawaii.png`,
                weight: 100
              },{
                id: 1,
                name: "Camera",
                path: `${dir}/item/Camera.png`,
                weight: 90
              },{
                id: 2,
                name: "Pants",
                path: `${dir}/item/Pants.png`,
                weight: 60
              },{
                id: 3,
                name: "Santa",
                path: `${dir}/item/Santa.png`,
                weight: 10
              },{
                id: 4,
                name: "Fibi",
                path: `${dir}/item/Fibi.png`,
                weight: 7
              },{
                id: 5,
                name: "HandBus",
                path: `${dir}/item/HandBus.png`,
                weight: 5
              }],
            position: {x: 0, y: 0},
            size: { width: width, height: height },
        },
    ],
    },
    colored: {
      name: "Colored",
      layers: [
          {
          name: "Background",
          elements: [{
              id: 0,
              name: "Palm",
              path: `${dir}/background/Palm.png`,
              weight: 55
            },{
              id: 1,
              name: "BoatBack",
              path: `${dir}/background/BoatBack.png`,
              weight:44
            },{
              id: 2,
              name: "Graffity",
              path: `${dir}/background/Graffity.png`,
              weight:33
            },{
              id: 3,
              name: "Bus",
              path: `${dir}/background/Bus.png`,
              weight: 22
            },{
              id: 4,
              name: "SNY",
              path: `${dir}/background/SNY.png`,
              weight: 11
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
          },
          {
              name: "Surf",
              elements: [{
                  id: 0,
                  name: "Shadow",
                  path: `${dir}/surf/Shadow.png`,
                  weight: 90
                },{
                  id: 1,
                  name: "Orange",
                  path: `${dir}/surf/Orange.png`,
                  weight: 85
                },{
                  id: 2,
                  name: "Pink",
                  path: `${dir}/surf/Pink.png`,
                  weight: 77
                },{
                  id: 3,
                  name: "Desk",
                  path: `${dir}/surf/Desk.png`,
                  weight: 66
                },{
                  id: 4,
                  name: "Leaves",
                  path: `${dir}/surf/Leaves.png`,
                  weight: 44
                },{
                  id: 5,
                  name: "Cow",
                  path: `${dir}/surf/Cow.png`,
                  weight: 22
                },{
                  id: 6,
                  name: "Flower",
                  path: `${dir}/surf/Flower.png`,
                  weight: 5
                }],
              position: {x: 0, y: 0},
              size: { width: width, height: height },
          },
      {
          name: "Body",
          elements: [{
            id: 0,
            name: "Duck2",
            path: `${dir}/body/Duck2.png`,
            weight: 80
          },{
            id: 1,
            name: "Duck3",
            path: `${dir}/body/Duck3.png`,
            weight: 70
          },{
            id: 2,
            name: "Duck4",
            path: `${dir}/body/Duck4.png`,
            weight: 60
          },{
            id: 3,
            name: "Duck5",
            path: `${dir}/body/Duck5.png`,
            weight: 50
          },{
            id: 4,
            name: "Duck6",
            path: `${dir}/body/Duck6.png`,
            weight: 40
          },{
            id: 5,
            name: "Duck7",
            path: `${dir}/body/Duck7.png`,
            weight: 30
          },{
            id: 6,
            name: "Duck8",
            path: `${dir}/body/Duck8.png`,
            weight: 20
          }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
      {
          name: "Hat",
            elements: [{
              id: 0,
              name: "Empty",
              path: `${dir}/eye/Empty.png`,
              weight: 80
            },{
              id: 1,
              name: "Hat",
              path: `${dir}/hat/Hat.png`,
              weight: 60
            },{
              id: 2,
              name: "Cap",
              path: `${dir}/hat/Cap.png`,
              weight: 55
            },{
              id: 3,
              name: "Bear",
              path: `${dir}/hat/Bear.png`,
              weight: 50
            },{
              id: 4,
              name: "ArmyHat",
              path: `${dir}/hat/ArmyHat.png`,
              weight: 45
            },{
              id: 5,
              name: "HypeHat",
              path: `${dir}/hat/ArmyHat.png`,
              weight: 40
            },{
              id: 6,
              name: "OldSchoolHat",
              path: `${dir}/hat/OldSchoolHat.png`,
              weight: 35
            },{
              id: 7,
              name: "Bandana",
              path: `${dir}/hat/Bandana.png`,
              weight: 30
            },{
              id: 8,
              name: "Sweetie",
              path: `${dir}/hat/Sweetie.png`,
              weight: 26
            },{
              id: 9,
              name: "Nimb_2",
              path: `${dir}/hat/Nimb_2.png`,
              weight: 20
            },{
              id: 10,
              name: "Nimb_1",
              path: `${dir}/hat/Nimb_1.png`,
              weight: 15
            },{
              id: 11,
              name: "OctoHat",
              path: `${dir}/hat/OctoHat.png`,
              weight: 13
            },{
              id: 12,
              name: "SpaceHat",
              path: `${dir}/hat/SpaceHat.png`,
              weight: 12
            },{
              id: 13,
              name: "Idiot",
              path: `${dir}/hat/Idiot.png`,
              weight: 7
            },{
              id: 14,
              name: "RedGlass",
              path: `${dir}/hat/RedGlass.png`,
              weight: 3
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
      {
          name: "Eye",
            elements: [{
              id: 0,
              name: "Empty",
              path: `${dir}/eye/Empty.png`,
              weight: 80
            },{
              id: 1,
              name: "Wide",
              path: `${dir}/eye/Wide.png`,
              weight: 75
            },{
              id: 2,
              name: "White",
              path: `${dir}/eye/White.png`,
              weight: 70
            },{
              id: 3,
              name: "Lovely",
              path: `${dir}/eye/Lovely.png`,
              weight: 60
            },{
              id: 4,
              name: "Pixel",
              path: `${dir}/eye/Pixel.png`,
              weight: 50
            },{
              id: 5,
              name: "Water",
              path: `${dir}/eye/Water.png`,
              weight: 40
            },{
              id: 6,
              name: "Cool",
              path: `${dir}/eye/Cool.png`,
              weight: 35
            },{
              id: 7,
              name: "CuriEye",
              path: `${dir}/eye/CuriEye.png`,
              weight: 19
            },{
              id: 8,
              name: "Make",
              path: `${dir}/eye/Make.png`,
              weight: 15
            },{
              id: 9,
              name: "Empty",
              path: `${dir}/eye/Empty.png`,
              weight: 10
            },{
              id: 10,
              name: "HypeGlass",
              path: `${dir}/eye/HypeGlass.png`,
              weight: 1
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
      {
          name: "Item",
            elements: [{
              id: 0,
              name: "Empty",
              path: `${dir}/eye/Empty.png`,
              weight: 100
            },{
              id: 1,
              name: "Hawaii",
              path: `${dir}/item/Hawaii.png`,
              weight: 90
            },{
              id: 2,
              name: "Camera",
              path: `${dir}/item/Camera.png`,
              weight: 75
            },{
              id: 3,
              name: "Pants",
              path: `${dir}/item/Pants.png`,
              weight: 60
            },{
              id: 4,
              name: "Santa",
              path: `${dir}/item/Santa.png`,
              weight: 10
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
  ],
    },
    zombie: {
      name: "Zobmie",
      layers: [
          {
          name: "Background",
          elements: [{
              id: 0,
              name: "Palm",
              path: `${dir}/background/Palm.png`,
              weight: 55
            },{
              id: 1,
              name: "BoatBack",
              path: `${dir}/background/BoatBack.png`,
              weight:44
            },{
              id: 2,
              name: "Graffity",
              path: `${dir}/background/Graffity.png`,
              weight:33
            },{
              id: 3,
              name: "Bus",
              path: `${dir}/background/Bus.png`,
              weight: 22
            },{
              id: 4,
              name: "SNY",
              path: `${dir}/background/SNY.png`,
              weight: 11
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
          },
          {
              name: "Surf",
              elements: [{
                  id: 0,
                  name: "Shadow",
                  path: `${dir}/surf/Shadow.png`,
                  weight: 90
                },{
                  id: 1,
                  name: "Orange",
                  path: `${dir}/surf/Orange.png`,
                  weight: 85
                },{
                  id: 2,
                  name: "Pink",
                  path: `${dir}/surf/Pink.png`,
                  weight: 77
                },{
                  id: 3,
                  name: "Desk",
                  path: `${dir}/surf/Desk.png`,
                  weight: 66
                },{
                  id: 4,
                  name: "Leaves",
                  path: `${dir}/surf/Leaves.png`,
                  weight: 44
                },{
                  id: 5,
                  name: "Cow",
                  path: `${dir}/surf/Cow.png`,
                  weight: 22
                },{
                  id: 6,
                  name: "Flower",
                  path: `${dir}/surf/Flower.png`,
                  weight: 5
                }],
              position: {x: 0, y: 0},
              size: { width: width, height: height },
          },
      {
          name: "Body",
          elements: [{
              id: 0,
              name: "ZombieDuck",
              path: `${dir}/body/ZombieDuck.png`,
              weight: 100
          //   },{
          //     id: 1,
          //     name: "Palm",
          //     path: `${dir}/body/Palm.png`,
          //     weight: 30
          //   },{
          //     id: 2,
          //     name: "Graffity",
          //     path: `${dir}/body/Graffity.png`,
          //     weight: 20
          //   },{
          //     id: 3,
          //     name: "Bus",
          //     path: `${dir}/body/Bus.png`,
          //     weight: 10
          //   },{
          //     id: 4,
          //     name: "SNY",
          //     path: `${dir}/body/SNY.png`,
          //     weight: 5
          }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
      {
          name: "Hat",
            elements: [{
              id: 0,
              name: "Empty",
              path: `${dir}/hat/Empty.png`,
              weight: 70
            },{
              id: 1,
              name: "Cap",
              path: `${dir}/hat/Cap.png`,
              weight: 55
            },{
              id: 2,
              name: "Bear",
              path: `${dir}/hat/Bear.png`,
              weight: 50
            },{
              id: 3,
              name: "ArmyHat",
              path: `${dir}/hat/ArmyHat.png`,
              weight: 45
            },{
              id: 4,
              name: "HypeHat",
              path: `${dir}/hat/ArmyHat.png`,
              weight: 40
            },{
              id: 5,
              name: "OldSchoolHat",
              path: `${dir}/hat/OldSchoolHat.png`,
              weight: 35
            },{
              id: 6,
              name: "Bandana",
              path: `${dir}/hat/Bandana.png`,
              weight: 30
            },{
              id: 7,
              name: "Sweetie",
              path: `${dir}/hat/Sweetie.png`,
              weight: 26
            },{
              id: 8,
              name: "Nimb_2",
              path: `${dir}/hat/Nimb_2.png`,
              weight: 20
            },{
              id: 9,
              name: "Nimb_1",
              path: `${dir}/hat/Nimb_1.png`,
              weight: 15
            },{
              id: 10,
              name: "OctoHat",
              path: `${dir}/hat/OctoHat.png`,
              weight: 13
            },{
              id: 11,
              name: "SpaceHat",
              path: `${dir}/hat/SpaceHat.png`,
              weight: 12
            },{
              id: 12,
              name: "Idiot",
              path: `${dir}/hat/Idiot.png`,
              weight: 7
            },{
              id: 13,
              name: "RedGlass",
              path: `${dir}/hat/RedGlass.png`,
              weight: 3
            }],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
      {
          name: "Item",
          elements: [{
              id: 0,
              name: "Hawaii",
              path: `${dir}/item/Hawaii.png`,
              weight: 80
            },{
              id: 1,
              name: "Camera",
              path: `${dir}/item/Camera.png`,
              weight: 70
            },{
              id: 2,
              name: "Pants",
              path: `${dir}/item/Pants.png`,
              weight: 60
            },{
              id: 3,
              name: "Santa",
              path: `${dir}/item/Santa.png`,
              weight: 10
            },
          ],
          position: {x: 0, y: 0},
          size: { width: width, height: height },
      },
  ],
  },
};

module.exports = { width, height, description, baseImageUri, editionSize, startEditionFrom, endEditionAt, races, raceWeights };