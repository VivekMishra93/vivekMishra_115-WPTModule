let database={
	
		host: 'localhost',
		user: 'root',
		password: 'cdac',
		database: 'test',
		port:3306
	
	
};
const mysql=require('mysql2');
const connection = mysql.createConnection(database);







var result ="";
connection.query("select * from book where bookid = ?", [req.body.xyz.pqr], (err, res1) => {
        if (err) {
            result = err;
			console.log("trouble " + err);
        } else {
            result = res1;
			console.log("success" + result)
        }
		
		console.log("1 " +);
        res.send(result);
    });


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());




app.use(express.static("sf"));


app.get("/getBook",(req,resp)=>{
let input = req.query.x;
console.log(input);
let output ={bookidnotfoundstatus:false, book:{bookid:1,bookname:'java',price:350} };

con.query('select * from book where bookid=?',[input],(error,rows)=>{

    if(rows.length > 0)
    {
        output.bookidnotfoundstatus=true;
        output.book=rows[0];

    }
    resp.send(output);


}
);




});

app.get("/addbook",(req,resp)=>{
let input={bookid:req.query.x,bookname:req.query.y,price:req.query.z};
console.log(input);
let output=true;

con.query('insert into item(bookid,bookname,price) values (2,python, 450)',
[input.bookid,input.bookname,input.price],
(error,whathappenedtoinsert)=>{
        if(error)
        {
                
        }

        else if(whathappenedtoinsert.affectedRows>0)
        {
                output=true;

        }

        resp.send(output);
           
}
);
});

app.get("/addbook",(req,resp)=>{
	let input={bookid:req.query.x,bookname:req.query.y,price:req.query.z};
	console.log(input);
	let output=true;
	
	con.query('insert into item(bookid,bookname,price) values (3,c++, 550)',
	[input.bookid,input.bookname,input.price],
	(error,whathappenedtoinsert)=>{
			if(error)
			{
					
			}
	
			else if(whathappenedtoinsert.affectedRows>0)
			{
					output=true;
	
			}
	
			resp.send(output);
			   
	}
	);



});




app.get("/getAllItems",(req,resp)=>{

    con.query('select * from item',[],(error,rows)=>{

        
        resp.send(rows);

}
);
   




});





const bodyParser = require('body-parser');
const { response } = require('express');



app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});