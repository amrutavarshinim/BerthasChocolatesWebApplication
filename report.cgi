#!/usr/bin/perl
use DBI;
#code by Amruta Varshini
#code by jadrn038

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn038";
my $username = "jadrn038";
my $password = "widget";  
my $database_source = "dbi:mysql:$database:$host:$port";

    
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';  

use CGI;
use CGI::Cookie

$q = new CGI;

my $cookie = $q->cookie(-name=>'jadrn038',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta charset="utf-8">
    <title>BerthasChocolates.com</title>
    <link rel="stylesheet" href="/~jadrn038/proj4/report.css">
</head>

<body>
    <div>
            <h1>Sales Report</h1>
END_CONTENT

my $sth_grand = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku;");
$sth_grand->execute();
while(my @row=$sth_grand->fetchrow_array()){
    print "<h3>Total Profit : \$"."$row[0]"."</h3>";      
    print "<h3>Total sales : "."$row[1]"."</h3>";}
print "<hr/>";
$sth_grand->finish();

######        Milk Chocolate
my $sth = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Milk chocolate' order by products.sku;");
$sth->execute();
print "<h2>Milk Chocolate</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Milk chocolate';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
    print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
print "<hr/>";
$sth->finish();
############### Dark Chocolate
my $sth_dark = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Dark chocolate' order by products.sku;");
$sth_dark->execute();
print "<h2>Dark Chocolate</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth_dark->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Dark chocolate';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
   print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
print "<hr/>";
$sth_dark->finish();

###################### Nuts and chews
my $sth_nuts = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Nuts and chews' order by products.sku;");
$sth_nuts->execute();
print "<h2>Nuts and Chews</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth_nuts->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Nuts and chews';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
    print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
print "<hr/>";
$sth_nuts->finish();

#####################Brittles and toffees
my $sth_toffee = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Brittles and toffies' order by products.sku;");
$sth_toffee->execute();
print "<h2>Brittles and toffies</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth_toffee->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Brittles and toffies';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
    print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
print "<hr/>";
$sth_toffee->finish();
######################Truffles
my $sth_truffle = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Truffles' order by products.sku;");
$sth_truffle->execute();
print "<h2>Truffles</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth_truffle->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Truffles';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
    print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
print "<hr/>";
$sth_truffle->finish();

#########################Gifts
my $sth_gift = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Gifts' order by products.sku;");
$sth_gift->execute();
print "<h2>Gifts</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth_gift->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Gifts';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
    print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
print "<hr/>";
$sth_gift->finish();
##################### Holiday assortments
my $sth_holiday = $dbh->prepare("select sales.sku,proj4.products.category,proj4.products.title,sales.quantity,(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as profit,order_date 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Holiday assortments' order by products.sku;");
$sth_holiday->execute();
print "<h2>Holiday assortments</h2>";
print "<table>\n";
print "<tr><td>SKU</td><td>CATEGORY</td><td>TITLE</td><td>QUANTITY</td><td>PROFIT</td><td>ORDER DATE</td></tr>";
while(my @row=$sth_holiday->fetchrow_array()) {
    print "<tr>";
    foreach $item (@row) { 
        print "<td>$item</td>";
        }       
       print "</tr>";
    }
print "</table>\n";
my $sth = $dbh->prepare("select SUM(sales.quantity*proj4.products.retail-sales.quantity*proj4.products.cost) as Total_Profit, SUM(sales.quantity) as Total_Quantity 
from sales,proj4.products where sales.sku=proj4.products.sku AND products.category='Holiday assortments';");
$sth->execute();
while(my @row=$sth->fetchrow_array()){
    print "<h4>Profit : \$"."$row[0]"."</h4>";      
    print "<h4>Quantity sold : "."$row[1]"."</h4>";}
$sth_holiday->finish();

$dbh->disconnect();

print "</div>\n";
print "</body>\n";
print "</html>\n";