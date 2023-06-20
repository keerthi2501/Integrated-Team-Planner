const input = [
    {type:'Bakrid', date:'06/29/2023', location:'Banglore', holidayType:'H'},
    {type:'Bakrid', date:'06/29/2023', location:'Pune', holidayType:'H'},
    {type:'Bakrid', date:'06/29/2023', location:'Ahmedabad', holidayType:'H'},
    {type:'May Day', date:'05/01/2023', location:'Banglore', holidayType:'H'},
    {type:'May Day', date:'05/01/2023', location:'Pune', holidayType:'H'},
    {type:'May Day', date:'05/01/2023', location:'Ahmedabad', holidayType:'H'},
    {type:'Ugadi/Padva', date:'03/22/2023', location:'Banglore', holidayType:'H'},
    {type:'Ugadi/Padva', date:'03/22/2023', location:'Pune', holidayType:'H'}
  ];
  
  const output = input.reduce((result, { type, date, location }) => {
    const formattedDate = new Date(date);
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);
    const key = formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    
    if (!result[key]) {
      result[key] = { date: formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), day: formattedDate.toLocaleDateString('en-GB', { weekday: 'long' }), type };
    }
  
    result[key][formattedLocation] = 'on';
    return result;
  }, {});
  
  const finalOutput = Object.values(output);
  
  console.log(finalOutput);







  


  const input = [
    {type:'Bakrid', date:'06/29/2023', location:'Banglore', holidayType:'H'},
    {type:'Bakrid', date:'06/29/2023', location:'Pune', holidayType:'H'},
    {type:'Bakrid', date:'06/29/2023', location:'Ahmedabad', holidayType:'H'},
    {type:'May Day', date:'05/01/2023', location:'Banglore', holidayType:'H'},
    {type:'May Day', date:'05/01/2023', location:'Pune', holidayType:'H'},
    {type:'May Day', date:'05/01/2023', location:'Ahmedabad', holidayType:'H'},
    {type:'Ugadi/Padva', date:'03/22/2023', location:'Banglore', holidayType:'H'},
    {type:'Ugadi/Padva', date:'03/22/2023', location:'Pune', holidayType:'H'}
  ];
  
  const output = input.reduce(function(result, item) {
    const type = item.type;
    const date = item.date;
    const location = item.location;
    const formattedDate = new Date(date);
    const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);
    const key = formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  
    if (!result[key]) {
      result[key] = { date: formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), day: formattedDate.toLocaleDateString('en-GB', { weekday: 'long' }), type };
    }
  
    result[key][formattedLocation] = 'on';
    return result;
  }, {});
  
  const finalOutput = Object.values(output);
  
  console.log(finalOutput);
  
  