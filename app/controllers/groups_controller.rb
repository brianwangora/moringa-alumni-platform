class GroupsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    # GET /groups
    def index 
        groups = Group.all 
        render json: groups
    end

    # GET /groups/:id
    def show 
        group = Group.find(params[:id])
        render json: group 
    end

    # POST /groups
    def create 
        group = Group.create(group_params)
        render json: group, status: :created
    end

    # PATCH /groups/:id
    def update
        group = Group.find(params[:id])
        if group
            group.update(update_params)
            render json: group 
        else
            render json: { errors: ["Group not found"] }, status: :not_found
        end
    end

    # DELETE /groups/:id
    def destroy 
        group = Group.find(params[:id])
        if group 
            group.destroy
            head :no_content
        else
            render json: { errors: ["Group not found"] }, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { errors: ["Group not found"] }, status: :not_found
    end

    def group_params
        params.permit(:title)
    end

    def update_params
        params.permit(:title)
    end

end
