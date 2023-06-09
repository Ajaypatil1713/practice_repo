function monthOfyear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`January`);
            break;
        case 2:
            console.log(`February`);
            break;
        case 3:
            console.log(`March`);
            break;
        case 4:
            console.log(`April`);
            break;
        case 5:
            console.log(`May`);
            break;
        case 6: 
            console.log(`Jun`);
            break;
        case 7:
            console.log(`July`);
            break;
        case 8:
            console.log(`August`);
            break;
        case 9:
            console.log(`September`);
            break;
        case 10:
            console.log(`Octomber`);
            break;
        case 11:
            console.log(`November`);
            break;
        case 12:
            console.log(`December`);
            break;
        default:
            console.log(`Please Enter Valid Details`);
            break;
    }
}
monthOfyear(0);
monthOfyear(2);
monthOfyear(5);
monthOfyear(12);
monthOfyear(15);
monthOfyear(100);
monthOfyear(null);
monthOfyear(undefined);