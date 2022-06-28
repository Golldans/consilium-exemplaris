model Users {
    User                    Int       @id(map: "IMAPRIMARYKEY") @default(autoincrement())
    Role                    Int?      @db.TinyInt
    Name                    String?   @db.NVarChar(50)
    CPF                     String?   @db.NVarChar(14)
    RG                      String?   @db.NVarChar(20)
    UFRG                    String?   @db.Char(2)
    Brithday                DateTime? @db.DateTime
    Street                  String?   @db.NVarChar(60)
    Address                 String?   @db.NVarChar(50)
    Number                  String?   @db.NVarChar(6)
    Complement              String?   @db.NVarChar(10)
    District                String?   @db.NVarChar(40)
    City_Id                 Int?
    UF                      String?   @db.NVarChar(2)
    Cep                     String?   @db.NVarChar(10)
    Phone                   String?   @db.NVarChar(14)
    Income                  Float?    @db.Money
  }