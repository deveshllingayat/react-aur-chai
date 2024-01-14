function Chai(){
    const variable = "a test variable";
    //write other logics here before returning the element
    return (
        <h3>Chai is ready {variable}</h3> //we cannot write if(),loop inside {} bcz its evaluated expression which requires only final outcome
    );
}
export default Chai;