import promBundle from "express-prom-bundle";

export const metricsMiddleware = promBundle({
    includeMethod: true, 
    includePath: true, 
    includeStatusCode: true, 
    includeUp: true,
    customLabels: {project_name: 'dummy-app', project_type: 'sre-assessment'},
    promClient: {
        collectDefaultMetrics: {
        }
      }
});