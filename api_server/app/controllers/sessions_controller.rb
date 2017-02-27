class SessionsController < Devise::SessionsController

  respond_to :json, :html

  def create
    render :json => current_user.to_json(
        {
            only: [:id, :email, :courses],
            include: {
                courses: {
                    only: [:id, :name]
                }
            }
        }
    )
  end

end
