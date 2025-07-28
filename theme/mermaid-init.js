// Initialisation de Mermaid
document.addEventListener('DOMContentLoaded', function() {
    // Configuration de Mermaid
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true
        },
        sequence: {
            useMaxWidth: true
        },
        gantt: {
            useMaxWidth: true
        }
    });
    
    // Rendu des diagrammes Mermaid
    mermaid.init();
}); 