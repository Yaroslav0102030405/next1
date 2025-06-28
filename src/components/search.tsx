import Form from "next/form"

const Search = () => {
    return ( <>
    <Form action="/products-db" className="flex gap-2 mt-5 ml-10">
    <input type="text" name="query" placeholder="Знайти продукт" className="border p-2" />
    <button type="submit" className="bg-blue-500 text-white p-2">Пошук</button>
    </Form></> );
}
 
export default Search;