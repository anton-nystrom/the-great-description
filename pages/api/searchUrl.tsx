import axios from "axios";


export default async function handler(req: any, res: any) {
    type Search = { data: { organic_results: [ link: any ]} };

    const api_key = "3dccacbb0a001da22589ea2d89f7c59d683c1c5442a6da24bf0e2f0879f783cc"
    const query = req.body.query;

    let search: Search = await axios.get(`https://serpapi.com/search.json?engine=google&q=${query}&api_key=${api_key}`);
    const url = search.data.organic_results[0].link;
    res.status(200).json(url);
}