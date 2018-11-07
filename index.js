#!/usr/bin/env node

var checker = require('license-checker');
var Table = require('cli-table3');

// instantiate
var table = new Table({
    head: ['license', 'repository', 'name', '@', 'version']
  , style: {'padding-left':0, 'padding-right':0}
  , colAligns: ["left", "left", "right", "middle", "left"]
  , chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' }
});

checker.init({
    start: './',
    summary: true,
    production: true
}, function(err, json) {
    if (err) {
        return console.log(err);
    } else {
        Object.keys(json).forEach(function(k){
        	var b = k.split('@');
		    table.push([json[k].licenses, json[k].repository, b[0], '@', b[1]]);
		});
		console.log(table.toString());
    }
});