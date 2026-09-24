function apiBaseUrl() {
    const configured = window.API_BASE_URL;
    if (configured && configured !== "YOUR_RENDER_API_URL_HERE") {
        return configured.replace(/\/+$/, "");
    }
    return "";
}

function apiUrl(path) {
    return apiBaseUrl() + path;
}

async function postJson(path, body) {
    let response;
    try {
        response = await fetch(apiUrl(path), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } catch (networkError) {
        const error = new Error("Could not reach the API");
        error.status = null;
        error.body = null;
        throw error;
    }

    if (!response.ok) {
        const error = new Error("Request failed");
        error.status = response.status;
        try {
            error.body = await response.json();
        } catch (parseError) {
            error.body = null;
        }
        throw error;
    }

    return response.json();
}

function showError(element, message) {
    element.textContent = message;
    element.hidden = false;
}