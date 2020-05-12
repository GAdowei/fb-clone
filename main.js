window.onload = () => {

    // Store select tags in variables
    let dateOptions = document.getElementsByTagName("select")[0]; 
    let  monthOptions = document.getElementsByTagName("select")[1];
    let yearOptions = document.getElementsByTagName("select")[2];

    // Append option tag to the DOM
    let addOptions = (selectNode, array) => {
        for(i = 0; i < array.length; i++) {
            let newOption = document.createElement('option');
            newOption.value = array[i];
            newOption.textContent = `${array[i]}`;
            selectNode.appendChild(newOption);
        }
    }

    // Add date options
    let addDateOptions = () => {
        let datesOfTheMonth = ['Day'];
        for(i = 0; i < 31; i++) {
            datesOfTheMonth.push(i + 1);
        }
        addOptions(dateOptions, datesOfTheMonth);
    }

    // Add month options
    let addMonthOptions = () => {
        let monthsOfTheYear = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        addOptions(monthOptions, monthsOfTheYear);
    }

    // Add year options
    let addYearOptions = () => {
        let years = ['Year'];
        let dummyDate = new Date;
        let currentYear = dummyDate.getFullYear();
        for(i = 0; i <= 115; i++) {
            years.push(currentYear - i);
        }
        addOptions(yearOptions, years);
    }

    // Call functions
    addDateOptions();
    addMonthOptions();
    addYearOptions();
}