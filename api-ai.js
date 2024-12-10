const apiKey = 'sk-svcacct-kRSTsCc1slDZ-08igABDHoPzPUTe5lq9zRVKg7KmQVt34UsnV4fbIvMvPqb65yXn6_duwT3BlbkFJdjf-fbhiCz4lxc6Elu4EUnWqEDhLwblMR-iypgZQfh3IVIVX49vaIFxLsBoHfhWNCSFvwA'; // Es una API funcional pero ya ha superado la quota así que no va

document.getElementById('generate-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value.trim();
    const aiResponse = document.getElementById('ai-response');

    if (!userInput) {
        aiResponse.textContent = 'Por favor, escribe algo para generar contenido.';
        return;
    }

    aiResponse.textContent = 'Generando respuesta, por favor espera...';

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Cambiado al modelo más reciente
                messages: [
                    { role: 'system', content: 'Eres un asistente útil que ayuda a estudiantes a redactar contenido.' },
                    { role: 'user', content: userInput },
                ],
                max_tokens: 200, // Ajusta según la longitud deseada de la respuesta
                temperature: 0.7, // Controla la creatividad de la respuesta
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error en la respuesta:', errorData);
            aiResponse.textContent = `Error: ${errorData.error.message || 'Ocurrió un problema al procesar la solicitud.'}`;
            return;
        }

        const data = await response.json();
        aiResponse.textContent = data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        aiResponse.textContent = 'Hubo un problema al generar la respuesta. Verifica tu conexión o intenta más tarde.';
    }
});