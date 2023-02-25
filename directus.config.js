
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        DB_CLIENT: env.DB_CLIENT,
        DB_HOST: env.DB_HOST,
        DB_PORT: env.DB_PORT,
        DB_DATABASE: env.DB_DATABASE,
        DB_USER: env.DB_USER,
        DB_PASSWORD: env.DB_PASSWORD,
        DB_SSL: env.DB_SSL
        
        EMAIL_VERIFY_SETUP = env.EMAIL_VERIFY_SETUP,
	EMAIL_FROM = env.EMAIL_FROM,
	EMAIL_TRANSPORT = env.EMAIL_TRANSPORT,

	EMAIL_SMTP_NAME = env.EMAIL_SMTP_NAME,
	EMAIL_SMTP_HOST = env.EMAIL_SMTP_HOST,
	EMAIL_SMTP_PORT = env.EMAIL_SMTP_PORT,
	EMAIL_SMTP_USER = env.EMAIL_SMTP_USER,
	EMAIL_SMTP_PASSWORD = env.EMAIL_SMTP_PASSWORD,
	EMAIL_SMTP_POOL = env.EMAIL_SMTP_POOL,
	EMAIL_SMTP_SECURE = env.EMAIL_SMTP_SECURE,
	EMAIL_SMTP_IGNORE_TLS = env.EMAIL_SMTP_IGNORE_TLS
    };
};
