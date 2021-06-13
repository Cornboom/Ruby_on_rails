class CommentMailer < ApplicationMailer
  default from: 'flatstackrails.test@gmail.com'

  def received(user)
    @user = user
    mail to: user.email, subject: 'Email confirmation about new comment'
  end
end
