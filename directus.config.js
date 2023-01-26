
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,
        BCAR_DB_CLIENT: env.BCAR_DB_CLIENT,
        BCAR_DB_HOST: env.BCAR_DB_HOST,
        BCAR_DB_PORT: env.BCAR_DB_PORT,
        BCAR_DB_DATABASE: env.BCAR_DB_DATABASE,
        BCAR_DB_USER: env.BCAR_DB_USER,
        BCAR_DB_PASSWORD: env.BCAR_DB_PASSWORD,
        BCAR_DB_SSL: env.BCAR_DB_SSL,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        DB_CLIENT: env.BCAR_DB_CLIENT,
        DB_HOST: env.BCAR_DB_HOST,
        DB_PORT: env.BCAR_DB_PORT,
        DB_DATABASE: env.BCAR_DB_DATABASE,
        DB_USER: env.BCAR_DB_USER,
        DB_PASSWORD: env.BCAR_DB_PASSWORD,
        
        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        // DB_CLIENT: 'pg',
        // DB_HOST: env.PGHOST,
        // DB_PORT: env.PGPORT,
        // DB_DATABASE: env.PGDATABASE,
        // DB_USER: env.PGUSER,
        // DB_PASSWORD: env.PGPASSWORD,
    };
};