var express = require('express');
var router = express.Router();
var schema = require('../dbschema/employeeSchema');
router.post('/api/retrieve', function(req, res) 
	{
		var employee ={
		
			eEmail: req.body.eEmail
		}
		getEmployee(employee, function(showData)
		{
			res.json(showData);
		});
	
	});

	var getEmployee = function(showData, callback)
	{
		schema.find(showData, function(err, data) 
		{
			console.log(data);
			if (data) 
			{
				response = {
					"output": data
				}
				callback(response);
			} else 
			{
				error = {
                "error": "No data found"
				}
				callback(error);
			}
		});
	}

module.exports = router;
