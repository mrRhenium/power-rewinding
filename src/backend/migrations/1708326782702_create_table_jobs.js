module.exports = {
    up: `
        CREATE TABLE IF NOT EXISTS jobs( 
            id varchar(36) PRIMARY KEY,
            jobId varchar(255) NULL,
            client varchar(255) NULL,
            heading varchar(255) NULL,
            descriptions varchar(255) NULL,
            is_active tinyint(1) default(1) NOT NULL,
            is_deleted tinyint(1) default(0) NOT NULL,
            created_at timestamp NULL,
            updated_at timestamp NULL
        );
        `,
    down: `DROP TABLE IF EXISTS jobs`,
};
