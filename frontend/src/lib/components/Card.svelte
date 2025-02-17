<script lang="ts">
    import type { request, response } from "../types";
    let responseData: response | null = null;
    let input = ""
    let err = ""

    const Submit = async () => {
        let error: string | null = null;
        
        
        console.log(JSON.stringify(input));

        try {
            const res = await fetch("http://localhost:3000/api/v1", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({"url": input})
            })
            console.log(res.body);
            if (!res.ok)
            {
                const errorData = await res.json(); // Try to get JSON error details
                err = errorData.message
                throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
            }
            const json = await res.json();
            responseData = {
                URL: json.url,
                CustormShort: json.short,
                Expiry: json.expiry, 
                XRateRemaining: json["rate-limit"],
                XRateLimitReset: json["rate-limit-reset"]
            };
        } catch (errR) {
            error = (errR as Error).message || "Something went wrong!";
        }
        
    }
</script>

<div class="border border-white rounded-md shadow-black shadow-sm grid justify-center items-center p-5">
    <h2 class="m-4 text-blue-400 text-4xl">Paste URL To Be Shortened</h2>
    <div class="justify-center items-center m-4">
        <input class="border bg-white border-black rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" type="text" bind:value={input}>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition" onclick={() => Submit()}>Shorten URL</button>
        <p>{err}</p>
    </div>

    {#if responseData != null}
        <div class="justify-center items-center m-4 p-2 border-t border-white text-wrap">
            <h3 class="text-white text-3xl">Here Is Your Shortened URL</h3>
            <div class="flex flex-col text-red-400">
                <h3>Your Link: {responseData.URL}</h3>
                <h3>Shortened Link: {responseData.CustormShort}</h3>
                <h3>Expiry: {responseData.Expiry}</h3>
                <h3>Limit Reset: {responseData.XRateLimitReset}</h3>
                <h3>Remaining Tries: {responseData.XRateRemaining}</h3>
            </div>
        </div>
    {/if}
</div>