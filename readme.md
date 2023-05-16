# 1. DB投入

## managementという名前のDBを作成

```sql
CREATE DATABASE IF NOT EXISTS `management`;
```

## userテーブルをDBに作成。user_id、username、emailを作成。user_idをプライマリーキーにする

```sql
CREATE TABLE management.user (
  user_id INT(255) NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_id)
);
```

## 最後に、userテーブルへデータを挿入

```sql
INSERT INTO management.user (username, email) 
VALUES ("saito", "info@ziyuss.jp"),
("tanaka", "info@tanaka.com"),
("yamada", "info@yamada.com");
```

# 2. yarn を実行

# 3. yarn start を実行、 http://localhost:3001

# 4. 別タブのターミナルから src/ の各ファイルを 「node ./src/getUser.js」 のように実行して DBの内容を取得、変更確認。
