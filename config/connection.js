var mysql = require("mysql");
var connection; 

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  var connection = mysql.createConnection({
  host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "hcgyf9c76ma3tiv5",
  password: "st3hs8tewv7odphd",
  database: "k34nslmog7x6ghvg"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
