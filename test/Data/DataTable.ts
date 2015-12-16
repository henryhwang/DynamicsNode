/// <reference path="../../typings/tsd.d.ts"/>

import {DataTable} from "../../Data/DataTable";
import {Guid} from "../../CRM/Guid";
import assert = require("assert");
import fs = require("fs");

before(function(){
  // create temp dir if doesn't exist
  if(!fs.existsSync("tmp")) fs.mkdirSync("tmp");
});


describe("Data",function(){
  describe("DataTable", function(){

    it("Initializes from an existing Array",function(){

      var rows = new Array<Object>();
      rows.push({prop1:"value1",prop2:"value2"});
      rows.push({prop1:"value1",prop2:"value2"});
      rows.push({prop1:"value1",prop2:"value2"});

      var dt = new DataTable(rows);
      assert.deepEqual(dt.rows,rows);
    });

    it("Loads and read JSON data",function(){

      var fileName="tmp/test.json";

      // TODO: add different data types
      var d1 = new DataTable();
      d1.rows.push({prop1: Guid.create().toString(),prop2:"value2&"}); // use xml not permitted values
      d1.rows.push({prop1:true,prop2:"val\tue2\n"}); // use xml not permitted values
      d1.rows.push({prop1:false,prop2:new Date(), prop3:12, prop4:12.5});
      d1.save(fileName);

      var d2 = DataTable.load(fileName);
      assert.deepEqual(d1,d2, JSON.stringify(d2,null,4));

    });

    it("Loads and read XML data",function(){

      var fileName="tmp/test.xml";

      // TODO: add different data types
      var d1 = new DataTable();
      d1.rows.push({prop1: Guid.create().toString(),prop2:"value2&"}); // use xml not permitted values
      d1.rows.push({prop1:true,prop2:"val\tue2\n"}); // use xml not permitted values
      d1.rows.push({prop1:false,prop2:new Date(), prop3:12, prop4:12.5});
      d1.save(fileName);

      var d2 = DataTable.load(fileName);
      assert.deepEqual(d1,d2, JSON.stringify(d2,null,4));
    });
  });
});
