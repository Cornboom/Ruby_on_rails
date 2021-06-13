class User < ApplicationRecord
  has_secure_password
  before_save { self.email = email.downcase }
  has_many :cards
  has_many :comments
  validates :nickname,
            presence: true,
            length: { minimum: 2 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/
  validates :email,
            presence: true,
            uniqueness: true,
            format: { with: VALID_EMAIL_REGEX }
  VALID_PASSWORD_REGEX = /\A(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}\z/
  validates :password,
            presence: true,
            format: { with: VALID_PASSWORD_REGEX }
end
