module.exports = {
    up: `
      CREATE TABLE IF NOT EXISTS job_medias( 
          id varchar(36) PRIMARY KEY,
          job_id varchar(36) NULL,
          user_id varchar(36) NULL,
          media longtext NULL,
          is_deleted tinyint(1) default(0) NOT NULL,
          created_at timestamp NULL,
          updated_at timestamp NULL
      );
      `,
    down: `DROP TABLE IF EXISTS job_medias`,
};
