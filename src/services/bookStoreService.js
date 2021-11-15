export default class BookStoreService {
    data = [
        {id:1, name: 'Сказки', author: 'Alex Hitch', price: 200, coverImage: 'https://img1.labirint.ru/rcimg/ca6e259cddd1cb7ff3e9058a16f0af05/1920x1080/books74/730479/ph_001.jpg?1578727504'},
        {id:2, name: 'Комиксы', author: 'Boris Godunov', price: 300, coverImage: 'http://s003.radikal.ru/i202/1405/45/86a3a577fba4.png'},
        {id:3, name: 'Анекдоты', author: 'Mary Strict', price: 150, coverImage: 'https://upload.wikimedia.org/wikipedia/ru/b/bd/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B0_%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.jpg'},
    ]
    getBooks = () => {
        return new Promise((resolve, reject)=>{
            Math.random() > 0.7 ?
            setTimeout(()=>{reject(new Error('server error (404)').message)}, 300)
                :
            setTimeout(()=> {resolve(this.data)}, 700)
        })
    }
}