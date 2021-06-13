# Preview all emails at http://localhost:3000/rails/mailers/comment_mailer
class CommentMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/comment_mailer/received
  def received
    CommentMailer.received
  end

  # Preview this email at http://localhost:3000/rails/mailers/comment_mailer/shipped
  def shipped
    CommentMailer.shipped
  end

end
