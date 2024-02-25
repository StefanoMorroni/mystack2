CREATE TABLE geostore.gs_attribute 
  ( 
     id               INT8 NOT NULL, 
     attribute_date   TIMESTAMP, 
     name             VARCHAR(255) NOT NULL, 
     attribute_number FLOAT8, 
     attribute_text   VARCHAR(255), 
     attribute_type   VARCHAR(255) NOT NULL, 
     resource_id      INT8 NOT NULL, 
     PRIMARY KEY (id), 
     UNIQUE (name, resource_id) 
  ); 

CREATE TABLE geostore.gs_category 
  ( 
     id   INT8 NOT NULL, 
     name VARCHAR(255) NOT NULL, 
     PRIMARY KEY (id), 
     UNIQUE (name) 
  ); 

CREATE TABLE geostore.gs_resource 
  ( 
     id          INT8 NOT NULL, 
     creation    TIMESTAMP NOT NULL, 
     description VARCHAR(10000), 
     lastupdate  TIMESTAMP, 
     metadata    VARCHAR(30000), 
     name        VARCHAR(255) NOT NULL, 
     category_id INT8 NOT NULL, 
     PRIMARY KEY (id), 
     UNIQUE (name) 
  ); 

CREATE TABLE geostore.gs_security 
  ( 
     id          INT8 NOT NULL, 
     canread     BOOL NOT NULL, 
     canwrite    BOOL NOT NULL, 
     group_id    INT8, 
     resource_id INT8, 
     user_id     INT8, 
     username    VARCHAR(255), 
     groupname   VARCHAR(255), 
     PRIMARY KEY (id), 
     UNIQUE (user_id, resource_id), 
     UNIQUE (resource_id, group_id) 
  ); 

CREATE TABLE geostore.gs_stored_data 
  ( 
     id          INT8 NOT NULL, 
     stored_data VARCHAR(10000000) NOT NULL, 
     resource_id INT8 NOT NULL, 
     PRIMARY KEY (id), 
     UNIQUE (resource_id) 
  ); 

CREATE TABLE geostore.gs_user 
  ( 
     id            INT8 NOT NULL, 
     name          VARCHAR(255) NOT NULL, 
     user_password VARCHAR(255), 
     user_role     VARCHAR(255) NOT NULL, 
     group_id      INT8, 
     enabled       CHAR(1) NOT NULL DEFAULT 'Y', 
     PRIMARY KEY (id), 
     UNIQUE (name) 
  ); 

CREATE TABLE geostore.gs_user_attribute 
  ( 
     id      INT8 NOT NULL, 
     name    VARCHAR(255) NOT NULL, 
     string  VARCHAR(255), 
     user_id INT8 NOT NULL, 
     PRIMARY KEY (id), 
     UNIQUE (name, user_id) 
  ); 

CREATE TABLE geostore.gs_usergroup 
  ( 
     id          INT8 NOT NULL, 
     groupname   VARCHAR(255) NOT NULL, 
     description VARCHAR(255), 
     enabled     CHAR(1) NOT NULL DEFAULT 'Y', 
     PRIMARY KEY (id), 
     UNIQUE (groupname) 
  ); 

CREATE TABLE geostore.gs_usergroup_members 
  ( 
     user_id  INT8 NOT NULL, 
     group_id INT8 NOT NULL, 
     PRIMARY KEY (user_id, group_id) 
  ); 

ALTER TABLE geostore.gs_usergroup_members 
  ADD CONSTRAINT fkfde460db62224f72 FOREIGN KEY (user_id) REFERENCES gs_user; 

ALTER TABLE geostore.gs_usergroup_members 
  ADD CONSTRAINT fkfde460db9ec981b7 FOREIGN KEY (group_id) REFERENCES 
  gs_usergroup; 

CREATE INDEX idx_attribute_name 
  ON geostore.gs_attribute (name); 

CREATE INDEX idx_attribute_resource 
  ON geostore.gs_attribute (resource_id); 

CREATE INDEX idx_attribute_text 
  ON geostore.gs_attribute (attribute_text); 

CREATE INDEX idx_attribute_type 
  ON geostore.gs_attribute (attribute_type); 

CREATE INDEX idx_attribute_date 
  ON geostore.gs_attribute (attribute_date); 

CREATE INDEX idx_attribute_number 
  ON geostore.gs_attribute (attribute_number); 

ALTER TABLE geostore.gs_attribute 
  ADD CONSTRAINT fk_attribute_resource FOREIGN KEY (resource_id) REFERENCES 
  gs_resource; 

CREATE INDEX idx_category_type 
  ON geostore.gs_category (name); 

CREATE INDEX idx_resource_name 
  ON geostore.gs_resource (name); 

CREATE INDEX idx_resource_description 
  ON geostore.gs_resource (description); 

CREATE INDEX idx_resource_metadata 
  ON geostore.gs_resource (metadata); 

CREATE INDEX idx_resource_update 
  ON geostore.gs_resource (lastupdate); 

CREATE INDEX idx_resource_creation 
  ON geostore.gs_resource (creation); 

CREATE INDEX idx_resource_category 
  ON geostore.gs_resource (category_id); 

ALTER TABLE geostore.gs_resource 
  ADD CONSTRAINT fk_resource_category FOREIGN KEY (category_id) REFERENCES 
  gs_category; 

CREATE INDEX idx_security_resource 
  ON geostore.gs_security (resource_id); 

CREATE INDEX idx_security_user 
  ON geostore.gs_security (user_id); 

CREATE INDEX idx_security_group 
  ON geostore.gs_security (group_id); 

CREATE INDEX idx_security_write 
  ON geostore.gs_security (canwrite); 

CREATE INDEX idx_security_read 
  ON geostore.gs_security (canread); 

CREATE INDEX idx_security_username 
  ON geostore.gs_security (username); 

CREATE INDEX idx_security_groupname 
  ON geostore.gs_security (groupname); 

ALTER TABLE geostore.gs_security 
  ADD CONSTRAINT fk_security_user FOREIGN KEY (user_id) REFERENCES gs_user; 

ALTER TABLE geostore.gs_security 
  ADD CONSTRAINT fk_security_group FOREIGN KEY (group_id) REFERENCES 
  gs_usergroup; 

ALTER TABLE geostore.gs_security 
  ADD CONSTRAINT fk_security_resource FOREIGN KEY (resource_id) REFERENCES 
  gs_resource; 

ALTER TABLE geostore.gs_stored_data 
  ADD CONSTRAINT fk_data_resource FOREIGN KEY (resource_id) REFERENCES 
  gs_resource; 

CREATE INDEX idx_user_group 
  ON geostore.gs_user (group_id); 

CREATE INDEX idx_user_password 
  ON geostore.gs_user (user_password); 

CREATE INDEX idx_user_name 
  ON geostore.gs_user (name); 

CREATE INDEX idx_user_role 
  ON geostore.gs_user (user_role); 

ALTER TABLE geostore.gs_user 
  ADD CONSTRAINT fk_user_ugroup FOREIGN KEY (group_id) REFERENCES gs_usergroup; 

CREATE INDEX idx_user_attribute_name 
  ON geostore.gs_user_attribute (name); 

CREATE INDEX idx_user_attribute_text 
  ON geostore.gs_user_attribute (string); 

CREATE INDEX idx_attribute_user 
  ON geostore.gs_user_attribute (user_id); 

ALTER TABLE geostore.gs_user_attribute 
  ADD CONSTRAINT fk_uattrib_user FOREIGN KEY (user_id) REFERENCES gs_user; 

CREATE INDEX idx_usergroup_name 
  ON geostore.gs_usergroup (groupname); 

CREATE SEQUENCE geostore.hibernate_sequence; 