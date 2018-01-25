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
    <link rel="stylesheet" href="/~jadrn038/proj4/mycssfile.css">
    <link rel="stylesheet" type="text/css" 
    href="jquery-ui-1.10.2.custom/css/custom-theme/jquery-ui-1.10.2.custom.min.css" />
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script type="text/javascript" src="/~jadrn038/proj4/ajax_get_lib.js"></script>
    <script type="text/javascript" src="/~jadrn038/proj4/order.js"></script>
    <script type="text/javascript" src="/~jadrn038/proj4/shopping_cart.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    
</head>

<body id=\"confirmation\">
    <header>
        <img src="/~jadrn038/proj4/logo1.jpg" alt="Berthas Logo" class="logo" name="logo" />
        <h1>Bertha's Deluxe Chocolates</h1>
    <div id="navigation">
        <ul>
            <li><a href="/~jadrn038/proj4/index.html">Home</a></li>
            <li><a href="/~jadrn038/proj4/products.html">Products</a></li>
            <li><a href="/~jadrn038/proj4/order.html">Order Online</a></li> 
            <li><a href="/~jadrn038/proj4/about.html">About US</a></li>           
            <li><a href="/~jadrn038/proj4/contact.html">Contact Us</a></li>
        </ul>
    </div> 
    </header>
    <div>
            <h2>Thank you for placing the order!</h2>
END_CONTENT
my %cookies = $ENV{COOKIE};

#print "<table>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
my @skuArray;
my @qtyArray;
my $v = $q->cookie('jadrn038');  
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    my $sth = $dbh->prepare("INSERT INTO sales(sku,quantity,order_date) VALUES('$sku',$qty,CURDATE());");
    push(@skuArray,$sku);
    push(@qtyArray,$qty);
    $sth->execute();
    $sth->finish();
    } 

my ($key, $value);
my @orderInformation;
                
foreach $key ($q->param) {
    foreach $value ($q->param($key)) {
        push(@orderInformation,$value);
        }
}
my $size = @qtyArray;
my $count=0;
for(my $i=0;$i<$size;$i++){$count += $qtyArray[$i];}
my $shippng_fee = $count*2;


print "<div class=\"row\">";
print "<div class=\"column\" style=\"background-color:#eda978;\">";
print "<h2>Delivery Details</h2>";
print "<u><h5>Shipping Address</h5></u>";
print "<p id=\"address\">$orderInformation[0] "."$orderInformation[1]"."<br/>"."$orderInformation[2] "."$orderInformation[3]"."<br/>"."$orderInformation[4]".","."$orderInformation[5]"." - "."$orderInformation[6]"."<br/>"."$orderInformation[7]"."</p>";
print "<h5>Your order will reach you in 7 business days!</h5>";
print "</div>";
print "<div class=\"column\" style=\"background-color:#f3c6a5;\">";
print "<h2>Order Summary</h2>";
print "<p id=\"address\">Total Items ordered :"."$count"."<br/>"."Shipping fee :\$"."$shippng_fee</p>";
print "</div>";
print "</div>";
print "</div>\n";
print "</body>\n";
print "</html>\n";
$dbh->disconnect();
