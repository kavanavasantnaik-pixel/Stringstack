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
    const response = await fetch(apiUrl(path), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const error = new Error("Request failed");
        error.status = response.status;
        throw error;
    }

    return response.json();
}

function showError(element, message) {
    element.textContent = message;
    element.hidden = false;
}