/**
 * Merges properties from two car objects, preserving properties of both objects.
 * 
 * Given the unclear nature of the question, the assumption is made that, in case of both objects having the same key/property,
 * the value from the second object will prevail, only if the value is not null or undefined.
 *
 * @param {object} carA - The first car object.
 * @param {object} carB - The second car object.
 * @returns {object} - A new object with merged properties from both carA and carB.
 * 
 * @testing - npm run testMergedCarProps
 * 
 * @remarks
 * It should be noted that due to the lack of clarity in the problem statement, assumptions were made to handle scenarios where
 * properties are shared between the two car objects. In such cases, the value from carB takes precedence only if it is not null or undefined.
 * The function iterates through carB properties, overwriting corresponding properties in the merged object.
 * If a property in carB has a value of null or undefined, it will not override the corresponding property from carA.
 * 
 * 
 * @Sample_Cases
 * 
 * Case 1:
 *      Input - car1 = { year: 2022, model: 'Sedan', brand: 'Toyota' }
 *              car2 = { year: 2023, color: 'Blue',  brand: 'Honda'  }
 *      Output - { year: 2023, model: 'Sedan', brand: 'Honda', color: 'Blue' }
 * 
 * 
 * Case 2:
 *      Input - car1 = { year: 2023, factoryCode: 210 }
 *              car2 = { year: null, color: 'Blue',  brand: 'Honda'  }
 *      Output - { year: 2023, brand: 'Honda', color: 'Blue', factoryCode: 210 }
 * 
 * 
 * Case 3:
 *      Input - car1 = { year: 2023, factoryCode: 210, logo: 'XYZ' }
 *              car2 = { }
 *      Output - { year: 2023, factoryCode: 210, logo: 'XYZ' }
 * 
 * 
 * Case 4:
 *      Input - car1 = { }
 *              car2 = { year: 2023, factoryCode: 210, logo: 'XYZ' }
 *      Output - { year: 2023, factoryCode: 210, logo: 'XYZ' }
 * 
 * 
 * Case 5:
 *      Input - car1 = { owner: null }
 *              car2 = { owner: undefined }
 *      Output - { owner: null }
 * 
 */


const mergedCarProps = (carA, carB) => {
        // Copy properties from carA to mergedCar
        const mergedCar = carA;

        // Copy properties from carB to mergedCar, overwriting existing properties, if not null/undefined
        for (const key in carB) {
                if (carB[key] !== null && carB[key] !== undefined) {
                        mergedCar[key] = carB[key];
                }
        }

        return mergedCar;
}

export default mergedCarProps;