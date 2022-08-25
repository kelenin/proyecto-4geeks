"""empty message

Revision ID: bbbab8d1eef5
Revises: 
Create Date: 2022-08-24 23:53:47.483593

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bbbab8d1eef5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('identificacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('test_pregunta',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('preguntas', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('preguntas')
    )
    op.create_table('topicos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_tema', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre_tema')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('nombre_usuario', sa.String(length=20), nullable=False),
    sa.Column('pnombre', sa.String(length=20), nullable=False),
    sa.Column('snombre', sa.String(length=20), nullable=True),
    sa.Column('papellido', sa.String(length=20), nullable=False),
    sa.Column('sapellido', sa.String(length=20), nullable=True),
    sa.Column('identificacion_id', sa.Integer(), nullable=True),
    sa.Column('cedula', sa.Integer(), nullable=False),
    sa.Column('genero_id', sa.String(length=30), nullable=False),
    sa.Column('fecha_registro', sa.DateTime(), nullable=False),
    sa.Column('roles', sa.String(length=20), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['identificacion_id'], ['identificacion.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('fecha_registro')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('titulo_post', sa.String(length=50), nullable=False),
    sa.Column('descripcion_post', sa.String(length=250), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('topico_id', sa.Integer(), nullable=False),
    sa.Column('fecha_registro', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['topico_id'], ['topicos.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descripcion_post'),
    sa.UniqueConstraint('fecha_registro'),
    sa.UniqueConstraint('titulo_post')
    )
    op.create_table('test_respuesta',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('respuesta', sa.String(length=2), nullable=False),
    sa.Column('testp_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('fecha_registro', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['testp_id'], ['test_pregunta.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('fecha_registro')
    )
    op.create_table('comentarios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion_comentarios', sa.String(length=250), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('fecha_registro', sa.DateTime(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('fecha_registro')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comentarios')
    op.drop_table('test_respuesta')
    op.drop_table('post')
    op.drop_table('user')
    op.drop_table('topicos')
    op.drop_table('test_pregunta')
    op.drop_table('identificacion')
    # ### end Alembic commands ###
