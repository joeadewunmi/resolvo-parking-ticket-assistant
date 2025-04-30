/**
 * Utility script to generate URL-friendly slugs for UK councils
 * Run with: node scripts/council-slugs.js
 */

// List of all UK council names from the provided list
const councilNames = [
  "Barnsley", "Birmingham", "Bolton", "Bradford", "Bury", "Calderdale", "Coventry",
  "Doncaster", "Dudley", "Gateshead", "Kirklees", "Knowsley", "Leeds", "Liverpool",
  "Manchester", "North Tyneside", "Newcastle Upon Tyne", "Oldham", "Rochdale", 
  "Rotherham", "South Tyneside", "Salford", "Sandwell", "Sefton", "Sheffield", 
  "Solihull", "St Helens", "Stockport", "Sunderland", "Tameside", "Trafford", 
  "Wakefield", "Walsall", "Wigan", "Wirral", "Wolverhampton", "Barking and Dagenham", 
  "Barnet", "Bexley", "Brent", "Bromley", "Camden", "Croydon", "Ealing", "Enfield", 
  "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow", "Havering", 
  "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea", "Kingston upon Thames", 
  "Lambeth", "Lewisham", "Merton", "Newham", "Redbridge", "Richmond upon Thames", 
  "Southwark", "Sutton", "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster", 
  "Bath and North East Somerset", "Bedford", "Blackburn with Darwen", "Blackpool", 
  "Bournemouth, Christchurch and Poole", "Bracknell Forest", "Brighton and Hove", 
  "Bristol", "Buckinghamshire", "Central Bedfordshire", "Cheshire East", 
  "Cheshire West and Chester", "Cornwall", "Cumberland", "Darlington", "Derby", 
  "Dorset", "East Riding of Yorkshire", "Halton", "Hartlepool", "Herefordshire", 
  "Isle of Wight", "Hull", "Leicester", "Luton", "Medway", "Middlesbrough", 
  "Milton Keynes", "North East Lincolnshire", "North Lincolnshire", 
  "North Northamptonshire", "North Somerset", "North Yorkshire", "Nottingham", 
  "Peterborough", "Plymouth", "Portsmouth", "Reading", "Redcar and Cleveland", 
  "Rutland", "Shropshire", "Slough", "Somerset", "Southampton", "Southend-on-Sea", 
  "South Gloucestershire", "Stockton-on-Tees", "Stoke-on-Trent", "Swindon", 
  "Telford and Wrekin", "Thurrock", "Torbay", "Warrington", "Westmorland and Furness", 
  "West Berkshire", "West Northamptonshire", "Wiltshire", "Windsor and Maidenhead", 
  "Wokingham", "City of York", "Cambridgeshire", "Derbyshire", "Devon", "East Sussex", 
  "Essex", "Gloucestershire", "Hampshire", "Hertfordshire", "Kent", "Lancashire", 
  "Leicestershire", "Lincolnshire", "Norfolk", "Nottinghamshire", "Oxfordshire", 
  "Staffordshire", "Suffolk", "Surrey", "Warwickshire", "West Sussex", "Worcestershire", 
  "Adur", "Amber Valley", "Arun", "Ashfield", "Ashford", "Babergh", "Basildon", 
  "Basingstoke & Deane", "Bassetlaw", "Blaby", "Bolsover", "Boston", "Braintree", 
  "Breckland", "Brentwood", "Broadland", "Bromsgrove", "Broxbourne", "Broxtowe", 
  "Burnley", "Cambridge", "Cannock Chase", "Canterbury", "Castle Point", "Charnwood", 
  "Chelmsford", "Cheltenham", "Cherwell", "Chesterfield", "Chichester", "Chorley", 
  "Colchester", "Cotswold", "Crawley", "Dacorum", "Dartford", "Derbyshire Dales", 
  "Dover", "East Cambridgeshire", "East Devon", "East Hampshire", "East Hertfordshire", 
  "East Lindsey", "East Staffordshire", "East Suffolk", "Eastbourne", "Eastleigh", 
  "Elmbridge", "Epping Forest", "Epsom & Ewell", "Erewash", "Exeter", "Fareham", 
  "Fenland", "Folkestone and Hythe", "Forest of Dean", "Fylde", "Gedling", "Gloucester", 
  "Gosport", "Gravesham", "Great Yarmouth", "Guildford", "Harborough", "Harlow", 
  "Hart", "Hastings", "Havant", "Hertsmere", "High Peak", "Hinckley and Bosworth", 
  "Horsham", "Huntingdonshire", "Hyndburn", "Ipswich", "Kings Lynn & West Norfolk", 
  "Lancaster", "Lewes", "Lichfield", "Lincoln", "Maidstone", "Maldon", "Malvern Hills", 
  "Mansfield", "Melton", "Mid Devon", "Mid Suffolk", "Mid Sussex", "Mole Valley", 
  "New Forest", "Newark & Sherwood", "Newcastle-Under-Lyme", "North Devon", 
  "North East Derbyshire", "North Hertfordshire", "North Kesteven", "North Norfolk", 
  "North West Leicestershire", "North Warwickshire", "Norwich", "Nuneaton & Bedworth", 
  "Oadby & Wigston", "Oxford", "Pendle", "Preston", "Redditch", "Reigate & Banstead", 
  "Ribble Valley", "Rochford", "Rossendale", "Rother", "Rugby", "Runnymede", "Rushcliffe", 
  "Rushmoor", "Sevenoaks", "South Cambridgeshire", "South Derbyshire", "South Hams", 
  "South Holland", "South Kesteven", "South Norfolk", "South Oxfordshire", "South Ribble", 
  "South Staffordshire", "Spelthorne", "St Albans", "Stafford", "Staffordshire Moorlands", 
  "Stevenage", "Stratford on Avon", "Stroud", "Surrey Heath", "Swale", "Tamworth", 
  "Tandridge", "Teignbridge", "Tendring", "Test Valley", "Tewkesbury", "Thanet", 
  "Three Rivers", "Tonbridge & Malling", "Torridge", "Tunbridge Wells", "Uttlesford", 
  "Vale of White Horse", "Warwick", "Watford", "Waverley", "Wealden", "Welwyn Hatfield", 
  "West Devon", "West Lancashire", "West Lindsey", "West Oxfordshire", "West Suffolk", 
  "Winchester", "Woking", "Worcester", "Worthing", "Wychavon", "Wyre", "Wyre Forest"
];

// Function to convert council name to URL-friendly slug
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Generate slugs and full URLs
console.log("Council URLs:");
console.log("=============");

const slugs = councilNames.map(name => {
  const slug = createSlug(name);
  const url = `https://resolvo.uk/${slug}`;
  console.log(`${name}: ${url}`);
  return { name, slug, url };
});

// Output total count
console.log("\nTotal councils:", slugs.length);

// For quick reference, output just the slugs as an array
console.log("\nArray of all council slugs:");
console.log(JSON.stringify(slugs.map(item => item.slug), null, 2));

// Export the variables
export { councilNames, createSlug, slugs }; 