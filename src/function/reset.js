const resetLocal = (id)=>{
        const filterArr = JSON.parse(localStorage.getItem(`myChampList`)).filter(x => parseInt(x) !== parseInt(id))
        localStorage.setItem('myChampList', JSON.stringify(filterArr))
        window.localStorage.removeItem(`feedText${id}`);
        window.localStorage.removeItem(`spell2${id}`);
        window.localStorage.removeItem(`spell1${id}`);
        window.localStorage.removeItem(`item${id}`);
}
export default resetLocal;