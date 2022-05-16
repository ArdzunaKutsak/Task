let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Eand", prices: [0, 1000] },
    { name: "Courses in Eadnd", prices: [99, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function courseFilter(requiredRange) {
    // Раз нужно что-то отфильтровать то возьмём метод filter)
    let filtredCourses = courses.filter((course) => {
            // если у курса не указано ни "от" ни "до", он в любом случае попадает в нашу выборку 
            if (!course.prices[0] && !course.prices[1]) { return true }

            // если у курса не указано "от" значит, то нам подойдёт любой курс, если его максимальная цена больше или равна нашей минимальной.
            if (!course.prices[0]) {
                return requiredRange[0] <= course.prices[1]
            }

            //если у курса не указана максимальная цена, то нам подойдёт курс минимальная цена которого меньше нашей минимальной или нашей максимальной
            if (!course.prices[1])
                return requiredRange[0] >= course.prices[0] || requiredRange[1] >= course.prices[0]
                    // ну а если у курса все цены указаны то наша максимальная цена должна быть равна или больше его минимальной, и что бы курс попал в нашу выборку его минимальная цена должна быть больше или равной нашей минимальной. 
            return requiredRange[1] >= course.prices[0] && course.prices[0] >= requiredRange[0]
        })
        // На всякий случай отфильтруем
    filtredCourses = filtredCourses.sort((a, b) => {
            //сначала по минимальной цене
            if (a.prices[0] >= b.prices[0]) {
                return 1
            } else return -1
                // потом по максимальной. Null я расцениваю как "до бесконечности". Пришлось сортировать в два этапа, иначе данные слегка путаются 
        }).sort((a, b) => {
            if (a.prices[1] >= b.prices[1] || a.prices[1] === null) {
                return 1
            } else return -1
        })
        // и вот он, искомый список
    return filtredCourses
}

console.log(
    courseFilter(requiredRange1),
    courseFilter(requiredRange2),
    courseFilter(requiredRange3)
)