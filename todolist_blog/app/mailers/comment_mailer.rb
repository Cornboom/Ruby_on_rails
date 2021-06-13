class CommentMailer < ApplicationMailer
  default from: 'flatstackrails.test@gmail.com'

  def received(user)
    @user = user
    mail to: user.email, subject: 'Email notification of a new comment'
  end
end
