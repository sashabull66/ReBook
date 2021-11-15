export const compose = (...hocs) => (component) => {
    return hocs.reduceRight((compWithHoc, hoc)=>hoc(compWithHoc), component)
}