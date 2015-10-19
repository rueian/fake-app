# A fake app for generating PostgreSQL traffic

This fake app is shipped with the ELK stack example I wrote for generating PostgreSQL traffic. So that it can be visualized on the PostgreSQL dashboard of Kibana.

The ELK example is here: https://github.com/rueian/ansible-elk-example

# How to use

1. After the ELK example is ready, you should access the http://10.10.40.10/sync first for creating database schema.

2. And then you can access the http://10.10.40.10/posts/generate to generate a lot of posts to PostgreSQL.

3. And then you can access the http://10.10.40.10/comments/generate to generate a lot of comments to PostgreSQL.
