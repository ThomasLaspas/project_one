import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const storedData = localStorage.getItem('key');
const pathName=new URL(request.url).pathname

    if (!storedData) {
        const response = redirect(`/login?redirect=${pathName}`)
        response.body = true
        throw response
    }
    return null
}